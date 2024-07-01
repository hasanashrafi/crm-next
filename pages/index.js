import HomePage from "@/components/templates/HomePage";
import Customer from "@/models/Customer";
import connectDb from "@/utils/connectDB";

export default function Home({ customers }) {
  return (
    <main className={`flex min-h-screen  items-center  `} >
      <HomePage customers={customers} />
    </main>

  );
}


export async function getServerSideProps() {

  try {
    await connectDb()
    const customers = await Customer.find()
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers))
      }
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}