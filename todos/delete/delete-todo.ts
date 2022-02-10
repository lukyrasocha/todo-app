import connection from "../../connection";

export async function deleteTodo(id): Promise<String> {
  const query = `DELETE FROM todo T WHERE T.id = \'${id}\'`;
  await connection.query(query);

  return id;
}
