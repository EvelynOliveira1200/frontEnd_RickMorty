"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-r from-black to-gray-900 flex items-center justify-center p-6'>
      <div className='max-w-4xl bg-white p-8 rounded-xl shadow-2xl flex flex-col sm:flex-row items-center'>
        <Image 
          src="/image/perfil_img.jpeg" 
          alt="Logo" 
          width={200} 
          height={200} 
          className="block rounded-lg sm:mr-8" 
        />
        <div className="text-center sm:text-left">
          <h1 className='text-3xl font-SemiBold bg-gradient-to-r  to-cyan-700 from-[#0092a6] text-transparent bg-clip-text'>
            Bem-Vindo Rick And Morty
          </h1>
          <ul className='mt-4 text-gray-600 list-disc list-inside'>
            <li>Evelyn Gonçalves de Oliveira</li>
            <li>Técnico em desenvolvimento de software</li>
            <li>Escola SENAI Valinhos</li>
          </ul>
          <blockquote className='mt-4 italic text-gray-600 border-l-4 border-[#0092a6] pl-4 max-w-[450px]'>
            "Todos os nossos spodem se tornar realidade se tivermos a coragem de persegui-los " - Peter Pan
          </blockquote>
          <div className='flex flex-col sm:flex-row gap-5 mt-6 justify-center sm:justify-start'>
            <Link href="/infoApi">
              <button className='bg-[#0092a6] hover:bg-[#0070cc] text-white font-medium py-3 px-11 rounded-lg shadow-md'>
                Saber Mais (API)
              </button>
            </Link>
            <Link href="/home">
              <button className='bg-[#0092a6] hover:bg-[#0070cc] text-white font-medium py-3 px-11 rounded-lg shadow-md'>
                Seguir para Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}