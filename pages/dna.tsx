import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Button, Grid, Link, Text, Spacer } from "@nextui-org/react";

const dna: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DNA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Text
          h1
          size={60}
          css={{
            textGradient: "45deg, $blue500 -20%, $pink500 50%",
          }}
          weight="bold"
        >
          DNA
        </Text>
        <img height={300} src={"/assets/dna.png"} />
        <Grid.Container justify="center">
          <Grid xs={4}>
            <Text size={30}>
              <Spacer y={4} />
              DNA is short for deoxyribonucleic acid. It is the primary building
              block of humans and almost all living things. It is composed of
              four nucleic acids,{" "}
              <Text
                small
                size={30}
                css={{
                  textGradient: "45deg, $red500, $yellow500 90%",
                }}
                weight="bold"
              >
                Adenine
              </Text>
              ,{" "}
              <Text
                small
                size={30}
                css={{
                  textGradient: "45deg, $pink500, $green500 90%",
                }}
                weight="bold"
              >
                Cytosine
              </Text>
              ,{" "}
              <Text
                small
                size={30}
                css={{
                  textGradient: "45deg, $blue500, $yellow500 90%",
                }}
                weight="bold"
              >
                Guanine
              </Text>
              , and{" "}
              <Text
                small
                size={30}
                css={{
                  textGradient: "45deg, $red500, $pink500 90%",
                }}
                weight="bold"
              >
                Thymine
              </Text>
              . Adenine pairs with Thymine, and Cytosine pairs with Guanine to
              form base pairs, in which collectively, a base, sugar, and
              phosphate are made up into a nucleotide. These nucleotides form
              the structure that you see as a double helix. One strand is held
              to another by hydrogen bonds between the bases.
            </Text>
          </Grid>
          <Grid xs={4}>
            <ul>
              <Text
                small
                size={35}
                css={{
                  textGradient: "45deg, $green500, $blue500 90%",
                }}
                weight="bold"
              >
                DNA Facts
              </Text>
              <li>
                <Text size={25}>
                  We share a number of DNA with animals and food around us. We
                  share 98.7% of our DNA with chimpanzees, 85% with a mouse, and
                  41% with a banana.
                </Text>
              </li>
              <li>
                <Text size={25}>
                  If you typed an average of 60 words per minute and typed
                  continuously for eight hours a day, it would take fifty years
                  to type the human genome.
                </Text>
              </li>
              <li>
                <Text size={25}>
                  DNA was originally discovered in 1869, although it was not
                  fully recognized until 1943 that it was actual genetic
                  material in our cells.
                </Text>
              </li>
              <li>
                <Text size={25}>
                  Humans have lost over 500 DNA codes over the course of
                  evolution.
                </Text>
              </li>
              <li>
                <Text size={25}>
                  Our DNA would stretch over 110 billion miles, which would be
                  the length of going to the Sun and back over 600 times.
                </Text>
              </li>
            </ul>
          </Grid>
        </Grid.Container>
        <img height={700} src={"/assets/dnastrand.jpg"} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/jordanhilado/AminoAcidDetection"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Jordan Hilado and Shaan Obney
        </a>
      </footer>
    </div>
  );
};

export default dna;
