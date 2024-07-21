import Image from 'next/image';

export default function Logo(){
    return (
        <div>
          <Image 
          src="/H-removebg-preview (1).png"
          width={200}
          height={200}
          alt="logo"
          />
        </div>
      );
    }
