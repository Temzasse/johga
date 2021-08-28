import Head from "next/head";
import Image from "next/image";
import Nav from "@components/Nav";
import { Text, Stack } from "@components/common";
import { styled } from "@styles/styled";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Joogaopettaja Johanna Lammi-Taskula</title>
        <meta name="description" content="TODO" />
      </Head>

      <div>
        <Header>
          <Image src="/johga.svg" height={72} width={72} alt="Lotuskukka" />
          <Nav />
        </Header>

        <main>
          <Hero>
            <HeroTitle id="home">
              <Text variant="title2" as="span">
                Joogaopettaja
              </Text>
              <br />
              <Text variant="title1" as="span">
                Johanna
              </Text>
              <br />
              <Text variant="subtitle" as="span">
                Lammi-Taskula
              </Text>
              <span></span>
            </HeroTitle>

            <HeroImage>
              <Image
                src="/images/yoga_3.svg"
                height={394}
                width={558}
                alt="Nainen joogaamassa istuma-asennossa"
              />
            </HeroImage>
          </Hero>

          <Section bg="primary">
            <SectionContent>
              <Stack axis="x" spacing="xlarge">
                <div>
                  <Text variant="overline" as="h2" id="about">
                    Hieman minusta
                  </Text>
                  <Text variant="title2" as="strong">
                    Oppaasi hyvään oloon
                  </Text>
                  <Text variant="body">
                    Sales non-disclosure agreement alpha gen-z paradigm shift
                    analytics churn rate startup learning curve metrics advisor
                    mass market. Twitter research & development metrics
                    interaction design pitch partner network ownership
                    marketing. Termsheet MVP ownership startup interaction
                    design strategy. Launch party client disruptive twitter
                    business model canvas virality infrastructure product
                    management crowdfunding infographic crowdsource startup low
                    hanging fruit iPad.
                  </Text>
                </div>

                <div>
                  <Image
                    src="/images/yoga_2.svg"
                    height={464}
                    width={426}
                    alt="Nainen joogaamassa seisten"
                  />
                </div>
              </Stack>
            </SectionContent>
          </Section>

          <Section>
            <SectionContent>
              <Text variant="overline" as="h2" id="classes">
                Joogatunnit
              </Text>
              <Text variant="title2" as="strong">
                Tukenasi etänä tai livenä
              </Text>
              <Text variant="body">
                Sales non-disclosure agreement alpha gen-z paradigm shift
                analytics churn rate startup learning curve metrics advisor mass
                market. Twitter research & development metrics interaction
                design pitch partner network ownership marketing. Termsheet MVP
                ownership startup interaction design strategy. Launch party
                client disruptive twitter business model canvas virality
                infrastructure product management crowdfunding infographic
                crowdsource startup low hanging fruit iPad.
              </Text>
            </SectionContent>
          </Section>

          <Section bg="secondary">
            <SectionContent>
              <Text variant="overline" as="h2" id="videos">
                Videotallenteet
              </Text>
              <Text variant="title2" as="strong">
                Joogaa missä vain
              </Text>
              <Text variant="body">
                Sales non-disclosure agreement alpha gen-z paradigm shift
                analytics churn rate startup learning curve metrics advisor mass
                market. Twitter research & development metrics interaction
                design pitch partner network ownership marketing. Termsheet MVP
                ownership startup interaction design strategy. Launch party
                client disruptive twitter business model canvas virality
                infrastructure product management crowdfunding infographic
                crowdsource startup low hanging fruit iPad.
              </Text>
            </SectionContent>
          </Section>

          <Section>
            <SectionContent>
              <Text variant="overline" as="h2" id="blog">
                Blogi
              </Text>
              <Text variant="title2" as="strong">
                Tarinoita joogasta
              </Text>
              <Text variant="body">
                Sales non-disclosure agreement alpha gen-z paradigm shift
                analytics churn rate startup learning curve metrics advisor mass
                market. Twitter research & development metrics interaction
                design pitch partner network ownership marketing. Termsheet MVP
                ownership startup interaction design strategy. Launch party
                client disruptive twitter business model canvas virality
                infrastructure product management crowdfunding infographic
                crowdsource startup low hanging fruit iPad.
              </Text>
            </SectionContent>
          </Section>
        </main>

        <Footer>
          <FooterContent>
            <Text variant="overline" as="h2" id="contact">
              Yhteystiedot
            </Text>
            <Text variant="title2" as="strong">
              Ota yhteyttä!
            </Text>
            <a href="mailto:johga@gmail.com">johga@gmail.com</a>
          </FooterContent>
          <Image
            src="/images/yoga_1.svg"
            height={295}
            width={391}
            alt="Nainen joogaamassa istuma-asennossa"
          />
        </Footer>
      </div>
    </div>
  );
}

const Header = styled("header", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const Hero = styled("div", {
  minHeight: "70vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-end",
});

const HeroTitle = styled("h1", {
  textAlign: "center",
});

const HeroImage = styled("div", {
  marginBottom: "-60px",
});

const Section = styled("section", {
  width: "100%",
  variants: {
    bg: {
      primary: { backgroundColor: "$primary" },
      secondary: { backgroundColor: "$secondary" },
      white: { backgroundColor: "$white" },
    },
  },
  defaultVariants: {
    bg: "white",
  },
});

const SectionContent = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  paddingHorizontal: "$large",
  paddingVertical: "$xxxlarge",
});

const Footer = styled("footer", {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "$primary",
  paddingHorizontal: "$large",
  paddingTop: "$xxxlarge",
});

const FooterContent = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
});
