import Cohere from "cohere-ai";

export const cohere = () => {
  Cohere.init(process.env.COHERE_API_KEY!);
};
