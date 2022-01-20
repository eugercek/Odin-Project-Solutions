let id = 0;

export default function CardFactory(content) {
  return {
    id: id++,
    content: content,
    clicked: false,
  };
}
