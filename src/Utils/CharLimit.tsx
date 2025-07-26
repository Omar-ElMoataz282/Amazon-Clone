export default function CharLimit(text: string, txtNums: number) {
  return text.length > txtNums ? text.slice(0, txtNums) + "..." : text;
}
