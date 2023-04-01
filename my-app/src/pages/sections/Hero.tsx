import React, { useState } from 'react'
import ImageText from '@/components/ImageText'
import ButtonLink from '@/components/ButtonLink'

const Hero = () => {
  return (
    <section>
      <div className="flex flex-wrap text-center gap-y-1 items-center bg-white text-black">

        <div className="mx-2 flex-col py-10 sm:py-20 px-5">

          <h1 className='py-5 text-6xl font-semibold'>Home of Photographers</h1>
          <p className='py-5 font-semibold'>Phlog is a place for people to promote their photography and appreciate other photography arts. To get started, you’ll need a Phlog account. It’s free to sign up, and you’ll get access to special content formats, custom analytics and more.</p>

          <div className='flex flex-col flex-wrap sm:flex-row gap-2 items-center justify-center'>
            <ButtonLink link='RegisterForm' title="Create an Account"/>
            <ButtonLink link='photos' title="Gallery"/>
          </div>

        </div>

        <ImageText
          text="Use Phlog Ads for marketing goals like awareness, consideration and conversions. Combine flexible formats with tailored targeting to launch successful campaigns"
          title="Grow your business with a free ads consultation"
          src="/GolfCart.JPG"
          order={1}
        />

        <ImageText
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea soluta consequatur officiis in, ipsam quos voluptate, fuga quaerat, tempora possimus. Quasi, accusantium! Quas eveniet cumque quaerat, dolor maiores ducimus."
          title="Benefits from analytics customization"
          src="/Goal.JPG"
          order={2}
        />

        <ImageText
          text="3Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ea soluta consequatur officiis in, ipsam quos voluptate, fuga quaerat, tempora possimus. Quasi, accusantium! Quas eveniet cumque quaerat, dolor maiores ducimus."
          title="Benefits from analytics customization"
          src="/Punch.JPG"
          order={3}
        />

      </div>
    </section>
  )
}

export default Hero