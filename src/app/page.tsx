"use client"
import { BackgroundImage1, FooterCon, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from "@/components/QuoteGenerator";
import cOne from '../../assets/cOne.png';
import cTwo from '../../assets/cTwo.png';
import { useState } from "react";
export default function Home({}) {
  const [numberOfQuotes, setNumberOfQuotes ] = useState<number | null>(0);
  function handleOpenGenerator(event: React.MouseEvent<HTMLInputElement>): void {
    console.log(`Dummy function ${event}`);
  }

  return (
    <main>
      <div>
      <GradientBackgroundCon>
        <BackgroundImage1 src={cOne} height="300" alt="cloudbackground"></BackgroundImage1>
        <BackgroundImage1 src={cTwo} height="300" alt="cloudbackground"></BackgroundImage1>

        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>

            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes API</FooterLink>.
            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton onClick={handleOpenGenerator}>
              <GenerateQuoteButtonText>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>
        
        <FooterCon>
          <div>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed by <FooterLink href="https://www.linkedin.com/in/raghav-rv28/" target="_blank" rel="noopener">Raghav Rudhra</FooterLink>
            <br />
            <br />

          </div>
        </FooterCon>
        </GradientBackgroundCon>
        </div>
    </main>
  )
}
