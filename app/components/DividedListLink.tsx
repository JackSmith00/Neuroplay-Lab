import Link from "next/link";
import DividedListItem from "./DividedListItem";

interface Props {
    children: any;
    href: string;
    lKey: string;
    extraStyles?: string;
}

const DividedListLink = ({ children, href, lKey, extraStyles }: Props) => {
    return (
        <>
            <DividedListItem
                listKey={lKey}
                extraStyles={
                    "text-center [&:not(:last-child)]:after:w-1/2 [&:not(:last-child)]:after:right-10 [&:not(:last-child)]:after:mx-auto " +
                    extraStyles
                }
            >
                <Link
                    key={lKey + "_list"}
                    href={href}
                    className="text-white underline hover:text-secondary-white "
                >
                    {children}
                </Link>
            </DividedListItem>
        </>
    );
};

export default DividedListLink;
