export function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-center gap-4 pt-10 mb-8 border-t border-gray-200">
      <div className="w-8 h-8 rounded-full bg-brandred flex items-center justify-center text-white text-sm font-bold shrink-0">
        {number}
      </div>
      <h3 className="text-naviblue font-bold text-base uppercase tracking-wider">
        {title}
      </h3>
    </div>
  );
}
