interface IProps {
    className?: string;
}

export default function ArrowSVG({ className }: IProps) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className={className}><path d="M12 4.5l-8 8 1.414 1.414L12 7.328l6.586 6.586L20 12.5l-8-8z" fill="currentColor"></path></svg>
    )
}