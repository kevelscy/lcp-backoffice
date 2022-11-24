import { IEmptyDataProps } from 'lib/types/empty'
import { EmptyIllustration } from './EmptyIllustration'

export const EmptyData = ({ classes, label, description, imgClasses, children }: IEmptyDataProps) => {
  return (
    <div className={`flex flex-col justify-center items-center ${classes}`}>
      <EmptyIllustration classes={imgClasses} />

      <div className='text-center mt-4'>
        <p className='font-semibold text-lg'>{label}</p>
        <p className='font-normal text-sm'>{description}</p>
        { children }
      </div>
    </div>
  )
}
