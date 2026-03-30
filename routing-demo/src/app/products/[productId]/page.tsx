export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <>
      <h1>Product Detail</h1>
      <p>Product ID: {productId}</p>
    </>
  );
}
