import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ConfirmationFormEmailProps = {
  message: string;
};

export default function ConfirmationEmail({
  message,
}: ConfirmationFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Contact Confirmation</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="borderBlack my-10 rounded-md bg-white px-10 py-4">
              <Heading className="leading-tight">
                Confirmation: I've Received Your Inquiry!
              </Heading>
              <Text>
                Thank you for reaching out! I have successfully received your
                contact form submission and appreciate you taking the time to
                connect.
              </Text>
              <Hr />
              <Heading className="text-lg leading-tight">
                Here is the message you sent:
              </Heading>
              <Text className="italic">"{message}"</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
