import { fetchCustomerById, fetchCustomers } from "@/app/lib/data";
import Form from "@/app/ui/customers/create-form";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Customer Details',
};

export default async function Page(props: { params: Promise<{ id: string }> }) {
    const params = await props.params;
    const id = params.id;
    const customer = await fetchCustomerById(id);

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Customers', href: '/dashboard/customers' },
                    {
                        label: 'Customer Details',
                        href: `/dashboard/customers/${id}/details`,
                        active: true,
                    },
                ]}
            />
            <p>
                {customer.name}
            </p>
            {/* <Form customer={customer} /> */}
        </main>
    );
}