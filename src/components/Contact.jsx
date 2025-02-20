import { Box, Flex, Heading, FormControl, Input, FormErrorMessage, Button, Textarea, Text } from "@chakra-ui/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import PaddingBox from "../assets/frame/paddingBox";
import { useState } from "react";
import { phoneRegex } from "../utils/validator";
import sendMail from "../utils/mailer";

// Schema using Zod
const Schema = z.object({
  name: z
    .string({ invalid_type_error: "Name is required." })
    .min(3, { message: "Name must be at least 3 characters." }),
  email: z
    .string({ invalid_type_error: "Email is required" })
    .email("Please enter a valid email."),
  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number."),
  description: z
    .string({ invalid_type_error: "Description is required." })
    .min(10, { message: "Description must be at least 10 characters." }),
});

const Contact = () => {
  // Use Zod's inference for the form data
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(Schema),
  });

  const [load, setLoad] = useState(false);
  const [alert, setAlert] = useState(undefined);

  const onSubmit = (data) => {
    setLoad(true);

    // Send the form data using the sendMail function
    sendMail(data).then(
      (response) => {
        setAlert("success");
        setLoad(false);
        reset();
      },
      (err) => {
        setAlert("error");
        setLoad(false);
      }
    );
  };

  return (
    <PaddingBox>
      <Flex
        align="center"
        justifyContent="center"
        textAlign="center"
        p={4}
        flexDirection="column"
        width="100%"
        maxWidth="1200px"
        margin="0 auto"
      >
        <Heading as="h2" mb={2} fontSize={["20px", "22px", "24px"]} display="flex" gap={5}>
          <Text color="red.400">Contact</Text> <Text color="red.700">Me</Text>
        </Heading>
        <Box borderBottom="2px" pt={2} width="25%" borderColor="red.500" />
        <Box justifyContent="center" marginTop={4} alignItems="center">
          <Box textAlign={"center"} fontSize={["18px", "20px", "22px"]}>
            <Text
              animate={{
                x: [0, 5, 0, -5, 0], // Random movement in x-axis
              }}
            >
              I'm passionate about helping people develop their websites and bringing their ideas to life. <br /> Let's collaborate and create something amazing together!
            </Text>
            <Text fontSize={["14px", "16px", "18px"]}>
              Send me your request for a proposal, and I'll get back to you with a detailed estimate.
            </Text>

            {/* Form */}
            <Box as="form" onSubmit={handleSubmit(onSubmit)} mt={8} maxWidth="100%">
              {/* Name Field */}
              <FormControl isInvalid={errors.name ? true : false} marginBottom={5}>
                <Input id="name" placeholder="Your Name*" {...register("name")} />
                <FormErrorMessage>{errors.name && errors.name.message}</FormErrorMessage>
              </FormControl>

              {/* Email Field */}
              <FormControl isInvalid={errors.email ? true : false} marginY={5}>
                <Input id="email" placeholder="Email*" {...register("email")} />
                <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
              </FormControl>

              {/* Phone Field */}
              <FormControl isInvalid={errors.phone ? true : false} marginY={5}>
                <Input
                  id="phone"
                  placeholder="Phone"
                  {...register("phone")}
                  onKeyDown={(e) => {
                    if (!/[0-9]/.test(e.key) && !/[+]/.test(e.key) && e.key !== "Backspace") {
                      e.preventDefault();
                    }
                  }}
                />
                <FormErrorMessage>{errors.phone && errors.phone.message}</FormErrorMessage>
              </FormControl>

              {/* Description Field */}
              <FormControl isInvalid={errors.description ? true : false} marginY={5}>
                <Textarea id="description" placeholder="Description*" {...register("description")} />
                <FormErrorMessage>{errors.description && errors.description.message}</FormErrorMessage>
              </FormControl>

              {/* Submit Button */}
              <Button
                background="red.400"
                color="white"
                marginY={2}
                type="submit"
                isLoading={load}
                _hover={{ backgroundColor: "red.700" }}
                loadingText="Sending"
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Flex>
    </PaddingBox>
  );
};

export default Contact;
