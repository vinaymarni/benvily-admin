import RegisterPage from "./RegisterPage";

interface PageProps {
  searchParams: Promise<{
    salonId?: string;
  }>;
}

export default async function Page({ searchParams }: PageProps) {
  // const params = await searchParams;
  // const id = params.salonId;

  return <RegisterPage />;
}