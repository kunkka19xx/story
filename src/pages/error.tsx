import Header from "@/components/header";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
} from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";

interface ErrorPageProps {
  message: string;
  cause: string;
}

const ErrorPage: NextPage<ErrorPageProps> = ({ message, cause }) => (
  <section>
    <div className="z-50 pb-16">
      <Header></Header>
    </div>

    <div className="flex flex-col">
      <h1 className="text-center text-red-500 text-4xl mt-10">ERROR</h1>
      <div className="ml-10 mt-10 text-red-500">
        <h3>Message: {message}</h3>
      </div>
      <div className="ml-10 mt-1 text-orange-600">
        <h3>Cause: {cause}</h3>
      </div>
    </div>
  </section>
);

export const getServerSideProps: GetServerSideProps<ErrorPageProps> = async (
  context: GetServerSidePropsContext<ParsedUrlQuery>
) => {
  const { query } = context;
  const { message, cause } = query;
  return { props: { message: message as string, cause: cause as string } };
};
export default ErrorPage;
