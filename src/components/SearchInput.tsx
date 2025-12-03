interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: Props) => (
  <div style={{textAlign:"center"}}>
    <input
    type="text"
    placeholder="Search character by name..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
    style={{
      padding: 10,
      border: "1px solid #ccc",
      borderRadius: 8,
      width: "100%",
      maxWidth: 400,
      marginBottom: 20
    }}
  />
  </div>
);
