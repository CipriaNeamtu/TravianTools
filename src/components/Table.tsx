import { DataProps } from "../context/storage";

type TableProps<T> = {
	data: T[];
}

const Table = <T extends DataProps>({ data }: TableProps<T>) => {
  return (
	<table className="table">
		{ data?.length != 0 &&
			<thead>
			<tr>
				<th>Name</th>
				<th>Email</th>
			</tr>
			</thead>
		}
		<tbody>
			{data?.map((item, index) => (
				<tr key={index}>
					<td>{item.user}</td>
					<td>{item.email}</td>
				</tr>
			))}
		</tbody>
	</table>
  );
};

export default Table;
