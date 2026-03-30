import { notFound } from "next/navigation";

export default async function ReviewDetailPage({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    notFound();
  }
  return (
    <>
      <h1>Review Detail</h1>
      <p>
        Review {reviewId} for product {productId}
      </p>
    </>
  );
}
