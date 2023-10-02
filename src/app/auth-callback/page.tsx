import { useRouter, useSearchParams } from "next/navigation";
import { trpc } from "../_trpc/client";

interface PageProps {}

const Page = ({}: PageProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");

  const { data, isLoading } = trpc.authCallback.useQuery(undefined, {
    onSuccess: ({ success }) => {
      if (success) {
        router.push(origin ? `/${origin}` : "/dashboard");
      }
    },
  });

  return <div>Page</div>;
};

export default Page;
