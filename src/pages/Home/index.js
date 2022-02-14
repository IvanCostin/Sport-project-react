import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import Carousel from 'react-elastic-carousel';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

function Home(props) {

  const breakPoints = [
    { width: 1, itemsToShow: 1, pagination: false },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3, pagination: false },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2, pagination: false },
    { width: 1450, itemsToShow: 5, pagination: false },
    { width: 1750, itemsToShow: 6, pagination: false },
  ]

  return (
    <div>
      <div id="Banner" className="h-120 bg-cover py-10 px-10 text-center sm:text-left sm:py-28 sm:px-48" style={{ backgroundImage: "url('/banner.png')", backgroundSize: "100% 100%" }}>
        {/* <img src="/banner.png" alt="banner"/> */}
        <div className="">
          <p className="uppercase text-gray-100 text-3xl font-black">The description of data <br />website to make money</p>
          <p className="py-4 uppercase text-gray-300 text-xl">Soccerdata for more information</p>
          <Link to="/signup" className="items-center bg-warning text-gray-100 font-semibold px-6 py-1 rounded-md uppercase">
              <span>Sign up</span>
          </Link>
        </div>
      </div>


      <div id="Products" className="pt-0 pb-10 py-5 sm:px-56 sm:pt-10 sm:py-20 bg-white">
        <div className="uppercase text-black text-3xl text-center mb-16">Description of Data</div>
        <div className="flex justify-center items-center flex-col sm:flex-row">
          <div className="flex flex-col items-center justify-center w-full sm:w-1/3 text-center mb-4">
            <img src="/slim1.png" alt="slim1" className="w-24" />
            <span className="uppercase text-black my-5 text-lg font-semibold">What is it</span>
            <span className="text-black">Lorem ipsum dolor sit amet, <br />consectetur adipiscing elit. <br />Donec sed vehicula sern.</span>
          </div>

          <div className="flex flex-col items-center justify-center w-full sm:w-1/3 text-center mb-4">
            <img src="/slim2.png" alt="slim1" className="w-24" />
            <span className="uppercase text-black my-5 text-lg font-semibold">CBDF (Full Spectrum extract) Token</span>
            <span className="text-black">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Donec sed vehicula sern.<br />Lorem ipsum dolor sit amet.</span>
          </div>

          <div className="flex flex-col items-center justify-center w-full sm:w-1/3 text-center mb-4">
            <img src="/slim3.png" alt="slim1" className="w-24" />
            <span className="uppercase text-black my-5 text-lg font-semibold">How is it asset backend?</span>
            <span className="text-black">Lorem ipsum dolor sit amet, consectetur <br />adipiscing elit. Donec sed vehicula sern.<br />Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
      </div>

      <div id="Pricing" className="px-10 py-5 sm:px-56 sm:py-20 bg-gray-900">
        <div className="uppercase text-gray-100 text-3xl text-center mb-20">Description of Subscription plans</div>
        <div className="flex flex-col items-center justify-center sm:flex-row">

          <div className="flex flex-col items-center justify-center bg-gray-900 transition-all duration-300 text-center py-8 px-10 border-1 border-primary transform hover:scale-110 hover:border-4 hover:z-10">
            <span className="uppercase text-tennis text-xl font-semibold mb-8">Global</span>
            <div className="flex flex-col">
              <div className="flex text-gray-100">
                <span className="text-5xl">$</span>
                <span className="text-7xl">50</span>
              </div>
              <span className="text-gray-100 font-semibold mb-14">Billed Monthly</span>
            </div>
            <span className="text-gray-100 mb-3 font-semibold">Lorem ipsum dolor sit amet</span>
            <span className="text-gray-100 mb-3 font-semibold">Lorem ipsum dolor sit amet</span>
            <span className="text-gray-100 mb-3 font-semibold">Lorem ipsum dolor sit amet</span>
            <span className="text-gray-100 mb-3 font-semibold">Lorem ipsum dolor sit amet</span>
            <span className="text-gray-100 mb-10 font-semibold">Lorem ipsum dolor sit amet</span>
            <Link to="/signup" className="bg-warning text-gray-100 font-semibold px-6 py-1 rounded-md uppercase">Sign up</Link>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-900 transition-all duration-300 text-center py-8 px-10 border-1 border-primary transform hover:scale-110 hover:border-4 hover:z-10">
            <span className="uppercase text-tennis text-xl font-semibold mb-8">Global</span>
            <div className="flex flex-col">
              <div className="flex text-gray-100">
                <span className="text-5xl">$</span>
                <span className="text-7xl">50</span>
              </div>
              <span className="text-gray-100 font-semibold mb-14">Billed Monthly</span>
            </div>
            <span className="text-gray-100 mb-3 font-semibold">Lorem ipsum dolor sit amet</span>
            <span className="text-gray-100 mb-3 font-semibold">Lorem ipsum dolor sit amet</span>
            <span className="text-gray-100 mb-3 font-semibold">Lorem ipsum dolor sit amet</span>
            <span className="text-gray-100 mb-3 font-semibold">Lorem ipsum dolor sit amet</span>
            <span className="text-gray-100 mb-10 font-semibold">Lorem ipsum dolor sit amet</span>
            <Link to="/signup" className="bg-warning text-gray-100 font-semibold px-6 py-1 rounded-md uppercase">Sign up</Link>
          </div>

          <div className="flex flex-col items-center justify-center bg-gray-900 transition-all duration-300 text-center py-8 px-10 border-1 border-primary transform hover:scale-110 hover:border-4 hover:z-10">
            <span className="uppercase text-tennis text-xl font-semibold mb-8">Global</span>
            <div className="flex flex-col">
              <div className="flex text-gray-100">
                <span className="text-5xl">$</span>
                <span className="text-7xl">50</span>
              </div>
              <span className="text-gray-100 font-semibold mb-14">Billed Monthly</span>
            </div>
            <span className="text-gray-100 mb-3 font-semibold">Lorem ipsum dolor sit amet</span>
            <span className="text-gray-100 mb-3 font-semibold">Lorem ipsum dolor sit amet</span>
            <span className="text-gray-100 mb-3 font-semibold">Lorem ipsum dolor sit amet</span>
            <span className="text-gray-100 mb-3 font-semibold">Lorem ipsum dolor sit amet</span>
            <span className="text-gray-100 mb-10 font-semibold">Lorem ipsum dolor sit amet</span>
            <Link to="/signup" className="bg-warning text-gray-100 font-semibold px-6 py-1 rounded-md uppercase">Sign up</Link>
          </div>

        </div>
      </div>

      <div id="Contact" className="px-2 py-5 sm:px-56 sm:py-20">
        <div className="uppercase text-gray-100 text-3xl text-center mb-20">Experiences</div>

        <Carousel itemsToShow={3} className="w-full" breakPoints={breakPoints}>
          <div className="w-full bg-gray-50 m-4 flex flex-col items-center px-10 text-center">
            <Box component="fieldset" borderColor="transparent" className="my-5">
              <Rating name="read-only" value={4} readOnly size="large" />
            </Box>
            <span className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas okio non inpsum bibendum iaculis.</span>
            <span className="py-5"><b>Tim Borst</b> - Langedijk</span>
          </div>
          <div className="w-full bg-gray-50 m-4 flex flex-col items-center px-10 text-center">
            <Box component="fieldset" borderColor="transparent" className="my-5">
              <Rating name="read-only" value={4} readOnly size="large" />
            </Box>
            <span className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas okio non inpsum bibendum iaculis.</span>
            <span className="py-5"><b>Tim Borst</b> - Langedijk</span>
          </div><div className="w-full bg-gray-50 m-4 flex flex-col items-center px-10 text-center">
            <Box component="fieldset" borderColor="transparent" className="my-5">
              <Rating name="read-only" value={4} readOnly size="large" />
            </Box>
            <span className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas okio non inpsum bibendum iaculis.</span>
            <span className="py-5"><b>Tim Borst</b> - Langedijk</span>
          </div><div className="w-full bg-gray-50 m-4 flex flex-col items-center px-10 text-center">
            <Box component="fieldset" borderColor="transparent" className="my-5">
              <Rating name="read-only" value={4} readOnly size="large" />
            </Box>
            <span className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras egestas okio non inpsum bibendum iaculis.</span>
            <span className="py-5"><b>Tim Borst</b> - Langedijk</span>
          </div>
        </Carousel>
      </div>

      <div className="px-10 py-5 sm:px-56 sm:py-20 bg-gray-900">

      </div>
    </div>
  );
}

export default Home;
