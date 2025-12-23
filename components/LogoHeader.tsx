import Image from "next/image";

export default function LogoHeader() {
  return (
    <div className="mb-10 flex justify-center">
      <Image src="/Etudia_yoko.png" width={120} height={40} alt="Étudia" />
    </div>
  );
}
