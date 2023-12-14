"use server";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
const InvoiceSchema = z.object({
  id: z.string().nullish(),
  customerId: z.string().nullish(),
  amount: z.coerce.number(),
  status: z.enum(["pending", "paid"]).nullish(),
  date: z.string().nullish(),
});
const CreateInvoice = InvoiceSchema.omit({ id: true, date: true });
export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split("T")[0];

  try {
    await sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");
  } catch (error) {
    console.log(error);
  }
}
const UpdateInvoice = InvoiceSchema.omit({ date: true });
export async function updateInvoice(id: string, formData: FormData) {
  const { customerId, amount, status } = UpdateInvoice.parse({
    customerId: formData.get("customerId"),
    amount: formData.get("amount"),
    status: formData.get("status"),
  });

  const amountInCents = amount * 100;

  try {
    await sql`
    UPDATE invoices
    SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
    WHERE id = ${id}
    `;
    revalidatePath("/dashboard/invoices");
    redirect("/dashboard/invoices");
  } catch (error) {
    console.log(error);
  }
}

export async function deleteInvoice(id: string) {
  //throw new Error("Failed to Delete Invoice");

  try {
    await sql`DELETE FROM invoices WHERE id = ${id}`;
    revalidatePath("/dashboard/invoices");
  } catch (error) {
    console.log(error);
  }
}

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", Object.fromEntries(formData));
  } catch (error) {
    if ((error as Error).message.includes("CredentialsSignin")) {
      return "CredentialSignin";
    }
    throw error;
  }
}
/****
 *
 *
 *
 *
 *
 * products actions
 */
const ProductSchema = z.object({
  id: z.string().nullable(),
  name: z.string().nullable(),
  description: z.string().nullable(),
  category: z.string().nullable(),
  medium: z.string().nullable(),
  subject: z.string().nullable(),
  price: z.coerce.number(),
  availability: z.coerce.boolean(),
  image: z.coerce.string().nullable(),
  date: z.string().nullable(),
});
const CreateProduct = ProductSchema.omit({ id: true, date: true });
export async function createProduct(formData: FormData) {
  const {
    name,
    description,
    category,
    medium,
    subject,
    price,
    availability,
    image,
  } = CreateProduct.parse({
    name: formData.get("name"),
    description: formData.get("description"),
    category: formData.get("category"),
    medium: formData.get("medium"),
    subject: formData.get("subject"),
    price: formData.get("price"),
    availability: formData.get("availability"),
    image: formData.get("image"),
  });
  const imageFile = formData.get("image") as File;
  const imgName = imageFile.name;
  console.log(imageFile.name);
  try {
    console.log("Parsed Data:", {
      name,
      description,
      category,
      medium,
      subject,
      price,
      availability,
      imgName,
    });

    // Insert product data into the database
    await sql`
    INSERT INTO products (name, description, category, medium, subject, price, availability, image)
    VALUES (${name}, ${description}, ${category}, ${medium}, ${subject}, ${price}, ${availability}, ${imgName})
  `;

    // Log a message indicating successful insertion
    console.log("Product inserted successfully.");

    // Redirect to the '/dashboard' page after successful insertion
    redirect("/dashboard");
  } catch (error) {
    // Log any errors that occur during the insertion process
    console.error("Error during product insertion:", error);

    // Redirect to the '/dashboard/product' page in case of an error
    redirect("/dashboard/product");
  }
}

export async function deleteProduct(id: string) {
  //throw new Error("Failed to Delete product");
  try {
    await sql`DELETE FROM products WHERE id = ${id}`;
    revalidatePath("/dashboard/product");
  } catch (error) {
    console.log(error);
  }
}
const UpdateProduct = ProductSchema.omit({ date: true });

export async function updateProduct(id: string, formData: FormData) {
  const {
    name,
    description,
    category,
    medium,
    subject,
    price,
    availability,
    image,
  } = UpdateProduct.parse({
    name: formData.get("name"),
    description: formData.get("description"),
    category: formData.get("category"),
    medium: formData.get("medium"),
    subject: formData.get("subject"),
    price: formData.get("price"),
    availability: formData.get("availability"),
    image: formData.get("image"),
  });

  try {
    await sql`
      UPDATE products
      SET
        name = ${name},
        description = ${description},
        category = ${category},
        medium = ${medium},
        subject = ${subject},
        price = ${price},
        availability = ${availability},
        image = ${image}
      WHERE id = ${id}
    `;
    revalidatePath("/dashboard/product");
    redirect("/dashboard/product");
  } catch (error) {
    console.log(error);
  }
}
