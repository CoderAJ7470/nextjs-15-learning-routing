const ProductDetails = async ({
  params,
}: {
  params: Promise<{ productId: string }>;
}) => {
  const productId = (await params).productId;
  return <h1>Product details for {productId}</h1>;
};

export default ProductDetails;
