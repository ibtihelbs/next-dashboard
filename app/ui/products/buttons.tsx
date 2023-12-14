import { deleteProduct } from "@/app/lib/actions";
import { TrashIcon, PlusIcon, PencilIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
export function DeleteProductBtn({ id }: { id: string }) {
  const deleteprodWithId = deleteProduct.bind(null, id);
  return (
    <form action={deleteprodWithId}>
      <button className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <TrashIcon className="w-5" />
      </button>
    </form>
  );
}
export function CreateProductBtn() {
  return (
    <Link
      href="/dashboard/product/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create product</span>{" "}
      <PlusIcon className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateProductBtn({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/product/${id}/edit`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <PencilIcon className="w-5" />
    </Link>
  );
}
