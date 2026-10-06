export async function GET() {
  return Response.json({ product: null });
}

export async function PUT() {
  return Response.json({ message: "Update product" });
}

export async function DELETE() {
  return Response.json({ message: "Delete product" });
}
