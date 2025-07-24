import Link from "next/link";

export default function SuccessPage() {
    return (
        <div className="page-container">
            <h2>Thank you for your purchase!</h2>
            <h2>We will ship your order as soon as it is ready.</h2>
            <p className="text-large">🎉</p>
            <Link href={'/'}>
                <button>Continue Shopping &rarr;</button>
            </Link>
        </div>
    )
}