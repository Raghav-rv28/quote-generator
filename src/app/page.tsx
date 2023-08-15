"use client"
import { BackgroundImage1, FooterCon, FooterLink, GenerateQuoteButton, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, QuoteGeneratorSubTitle, QuoteGeneratorTitle } from "@/components/QuoteGenerator";
import cOne from '../../assets/cOne.png';
import cTwo from '../../assets/cTwo.png';
import { useEffect, useState } from "react";
import { API } from "aws-amplify";
import { quotesQueryName } from "@/graphql/queries";

interface GenerateAQuoteData {
  generateAQuote: {
    statusCode: number;
    headers: { [key: string]: string };
    body: string;
  }
}


// interface for our DynamoDB object
interface UpdateQuoteInfoData {
  id: string;
  queryName: string;
  quotesGenerated: number;
  createdAt: string;
  updatedAt: string;
}

// type guard for our fetch function
// function isGraphQLResultForquotesQueryName(response: any): response is GraphQLResult<{
//   quotesQueryName: {
//     items: [UpdateQuoteInfoData];
//   };
// }> {
//   return response.data && response.data.quotesQueryName && response.data.quotesQueryName.items;
// }



export default function Home({}) {
  const [numberOfQuotes, setNumberOfQuotes ] = useState<number | null>(0);

  const updateQuoteInfo = async () => {
    try {
      const response = await API.graphql<UpdateQuoteInfoData>({
        query: quotesQueryName,
        authMode: "AWS_IAM",
        variables: {
          queryName: "Test",
        },
      })
      console.log('response', response);
      // setNumberOfQuotes();

      // Create type guards
      // if (!isGraphQLResultForquotesQueryName(response)) {
      //   throw new Error('Unexpected response from API.graphql');
      // }

      // if (!response.data) {
      //   throw new Error('Response data is undefined');
      // }

      // const receivedNumberOfQuotes = response.data.quotesQueryName.items[0].quotesGenerated;
      // setNumberOfQuotes(receivedNumberOfQuotes);

    } catch (error) {
      console.log('error getting quote data', error)
    }
  }

  useEffect(() => {
    updateQuoteInfo();
  }, [])

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
