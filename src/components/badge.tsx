import Image from "next/image";

const badges = [
  "/manage-kubernetes-in-google-cloud-skill-badge.png",
  // Add more badge URLs
];

const Credly = () => {
  return (
    <div className="px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-center items-center">
        {badges.map((badgeUrl, index) => (
          <div key={index} className="flex justify-center items-center">
            <Image
              src={badgeUrl}
              alt={`Badge ${index + 1}`}
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Credly;
