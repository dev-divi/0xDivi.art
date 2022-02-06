import Link from 'next/link'

const SiteBook = () => {
    return ( 
        <p>
            <Link href="/magic/tftpg">
            <a> 📖The Future Traveler's Pocket Guide Entry Manual</a>
            </Link>
            <br /> <br /> 
            <Link href="/magic/book">
            <a> 📖The Magic of Potentiality</a>
            </Link>
        </p> 
    );
}
 
export default SiteBook;