import Image from "next/image";
import icon from "../../favicon.ico"; // Correct import

export const Logo = () => {
    return (
        <Image
            height={50}
            width={50}
            alt="logo"
            src={icon} // Use the imported icon variable
        />
    );
};
