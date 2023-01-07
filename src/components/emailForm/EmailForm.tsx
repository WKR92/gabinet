import {} from "@tabler/icons";

import {
  Avatar,
  BackgroundImage,
  Box,
  Button,
  Group,
  Input,
  MediaQuery,
  Select,
  Text,
  Textarea,
  createStyles,
} from "@mantine/core";
import {
  KEY,
  PUBLIC_KEY,
  SERVICE_ID,
  TEMPLATE_ID,
  URL,
} from "../../consts/consts";
import { UseFormReturnType, useForm } from "@mantine/form";
import { forwardRef, useEffect } from "react";
import {
  useTherapistContext,
  useUpdateTherapistContext,
} from "../context/TheraphistContext";

import ada_w_small from "../../assets/ada_crircle_2.jpg";
import anna_small from "../../assets/ania_circle_2.jpg";
import axios from "axios";
import chair from "../../assets/chair.png";
import green_bg from "../../assets/green_bg.jpg";
import ola_b_small from "../../assets/ola_b_small_2.jpg";
import olga_j_small from "../../assets/olga_circle_2.jpg";
import { showNotification } from "@mantine/notifications";

const useStyles = createStyles(() => ({
  mainContainer: {
    width: "99.9vw",
    padding: "1rem 1rem",
    gap: "1rem",
    background: "linear-gradient(to right, #1f4037, #99f2c8)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    margin: "auto",
    maxWidth: "500px",
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    minWidth: "500px",
  },
  title: {
    width: "100%",
    margin: "0 0 1rem 0",
    textAlign: "center",
  },
  select: {
    fontWeight: "bold",
  },
}));

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  description: string;
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

interface FormValues {
  name: string;
  subject: string;
  phone: string;
  email: string;
  text: string;
  therapist: string;
}

const EmailForm: React.FC = () => {
  const { classes } = useStyles();
  const therapistContext = useTherapistContext();
  const updateTherapistContext = useUpdateTherapistContext();
  const form = useForm({
    initialValues: {
      name: "",
      subject: "",
      phone: "",
      email: "",
      text: "",
      therapist: therapistContext ? therapistContext : "Ogólnie do gabinetu",
    },

    validate: {
      name: (value) =>
        value.length < 5 ? "Proszę podać pełne imię i nazwisko" : null,
      subject: (value) => (value.length < 5 ? "Proszę podać temat" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Niepoprawny email"),
      phone: (value) =>
        value.length > 0 && value.length !== 9
          ? "Numer musi mieć 9 cyfr"
          : null,
      text: (value) =>
        value.length < 1
          ? "Wiadomość nie może być pusta"
          : value.length < 10
          ? "Wiadomość musi być treściwa"
          : null,
    },
  });

  useEffect(() => {
    return () => {
      updateTherapistContext("");
    };
  });

  const handleSubmit = (values: FormValues) => {
    const formData = new FormData();
    formData.append("service_id", SERVICE_ID);
    formData.append("template_id", TEMPLATE_ID);
    formData.append("user_id", PUBLIC_KEY);
    formData.append("accessToken", KEY);
    formData.append("message", values.text);
    formData.append("client_email", values.email);
    formData.append("from_name", values.name);
    formData.append("subject", values.subject);
    formData.append("to_name", values.therapist);
    formData.append(
      "client_phone",
      values.phone !== "" ? values.phone : "Nie podano"
    );

    axios
      .post(URL, formData)
      .then(() =>
        showNotification({
          title: "Email wysłany",
          autoClose: 10000,
          color: "green",
          message:
            "Twoja wiodommość została pomyślnie dostarczona do gabinetu. Odpowiemy jak szybko się da.",
        })
      )
      .catch(() =>
        showNotification({
          title: "Błąd",
          autoClose: 10000,
          color: "red",
          message:
            "Niestety, coś poszło nie tak i email nie został wysłany. Prosimy spróbować ponownie za jakiś czas",
        })
      );

    form.reset();
  };

  return (
    <BackgroundImage
      transition-style="in:polygon:opposing-corners"
      className={classes.mainContainer}
      src={green_bg}
      radius={0}
    >
      <Box className={classes.innerContainer}>
        <h3 className={classes.title}>Napisz do nas:</h3>
        <MediaQuery query="(max-width: 600px)" styles={{ minWidth: "90vw" }}>
          <form
            noValidate
            onSubmit={form.onSubmit((values, _event) => {
              handleSubmit(values);
            })}
            className={classes.formContainer}
          >
            <Input.Wrapper label="Imię i nazwisko" error={form.errors.name}>
              <Input required {...form.getInputProps("name")} />
            </Input.Wrapper>
            <Input.Wrapper label="Temat" error={form.errors.subject}>
              <Input required {...form.getInputProps("subject")} />
            </Input.Wrapper>
            <Input.Wrapper label="Twój email" error={form.errors.email}>
              <Input required {...form.getInputProps("email")} />
            </Input.Wrapper>
            <Input.Wrapper label="Telefon komórkowy" error={form.errors.phone}>
              <Input
                {...form.getInputProps("phone")}
                placeholder="Opcjonalne..."
                type="number"
              />
            </Input.Wrapper>
            <Select
              maxDropdownHeight={300}
              required
              label="Terapeuta"
              placeholder="Wybierz"
              data={[
                {
                  image: chair,
                  value: "Ogólnie do gabinetu",
                  label: "Ogólnie do gabinetu",
                },
                {
                  image: ada_w_small,
                  value: "Adrianna Weremij",
                  label: "Adrianna Weremij",
                },
                {
                  image: olga_j_small,
                  value: "Olga Jędrzejewicz",
                  label: "Olga Jędrzejewicz",
                },
                {
                  image: anna_small,
                  value: "Anna Ruszkiewicz",
                  label: "Anna Ruszkiewicz",
                },
                {
                  image: ola_b_small,
                  value: "Aleksandra  Borowa",
                  label: "Aleksandra Borowa",
                },
              ]}
              {...form.getInputProps("therapist")}
              itemComponent={SelectItem}
            />
            <Textarea
              placeholder="Twoja wiadomość"
              label="Twoja wiadomość"
              {...form.getInputProps("text")}
              autosize
              minRows={14}
              maxRows={14}
            />
            <Button color="yellow" type="submit">
              Wyślij
            </Button>
          </form>
        </MediaQuery>
      </Box>
    </BackgroundImage>
  );
};

export default EmailForm;
