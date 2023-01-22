import Resume from '../../assets/resume.pdf'

export default function CTA () {

    return (
        <div className='cta'>
            <a href={Resume} download className='btn'>Download Resume</a>
            <a href="#contact" className='btn btn-primary'>Say Hi</a>
        </div>
    )
}