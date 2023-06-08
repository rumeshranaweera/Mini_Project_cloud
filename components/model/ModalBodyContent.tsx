"use client";

type Props = {
  title?: string;
  body?: React.ReactElement;
};

function ModalBodyContent({ title, body }: Props) {
  return (
    <div>
      <div className="text-lg font-semibold text-center">{title}</div>
      <hr />
      <div className="relative p-6 flex-auto">{body}</div>
    </div>
  );
}

export default ModalBodyContent;
