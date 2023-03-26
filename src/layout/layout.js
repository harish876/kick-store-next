import styles from '@/styles/Layout.module.css'

export default function Layout({children}){
    return(
        <div className="flex h-screen">
            <div className="mx-auto my-20 bg-slate-20  flex-col rounded-md w-3/4 h-3/4 flex md:flex-row">
                <div className={styles.imgStyle}>
                    {<img 
                        src='https://i.graphicmama.com/blog/wp-content/uploads/2016/12/06093131/prud_x1_800x600.gif'
                        loading='lazy'
                        className='md:h-full aspect-video bg-no-repeat'
                    />}
                </div>
                <div className="flex-1 right flex flex-col justify-evenly">
                    <div className="text-center py-2">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
