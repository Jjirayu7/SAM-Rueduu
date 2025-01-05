import { Helmet } from 'react-helmet';
import { Button, Heading, Text, Img} from '../components';

function Cart() {
  return (
    <>
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Cart page" />
      </Helmet>
      <div className='flex w-full items-center bg-50_01 md:flex-col'>
        <div className='w-[14%] self-end md:w-full md:px-5'>
          <div className='flex flex-col items-center gap-[958px] lg:gap-[718px] md:gap-[718px] sm:gap-[479px]'>
            <div className='flex items-center gap-2'>
              <img src="images/img_menu.svg" alt="Menu" className="h-[52px] w-[50%] object-contain" />
              <Heading as='h1' 
              className="self-end text-[32pxl] font-bold !text-purple-900_01 lg:text-[27px] md:text-[26px] sm:text-[24px]">
                Menu</Heading>
            </div>
          </div>

        </div>

      </div>
    </>
  );
}

export default Cart;