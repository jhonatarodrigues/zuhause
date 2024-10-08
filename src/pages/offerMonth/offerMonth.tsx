import React, { useEffect, useState } from "react";

import HeaderComponent from '@/components/Header';
import BaseContent from "@/components/BaseContent";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BoxOffer from "@/components/BoxOffer";

import BuyWhatsApp from '@/assets/svg/buyWhatsApp';

import './style.scss'
import ContactInformation from "@/components/ContactInformation";
import { useProducts } from "@/hooks/useProducts";
import Product from "@/models/product";


const OfferMonth = () => {

  const [products, setProducts] = useState<Product[]>();
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { getProducts } = useProducts();



  useEffect(() => {
    const getBaseProducts = async () => {
      const {products, totalPages} = await getProducts({
        page: page,
        perPage: 2
      });

      setProducts(products);
      setTotalPages(totalPages);
    };
    
    getBaseProducts();
  }, [page]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };



  return (
    <>
      <HeaderComponent />
    
      <div id="MonthOffer">
        <BaseContent>
          <>
            <h1>Ofertas do mês</h1>
            <div className="contentOffer">
              {products?.map((product: Product) => (
                <BoxOffer product={product} />
              ))}
            </div>
            
            <div className="pagination">
              <button onClick={handlePreviousPage} disabled={page === 1}>
                Anterior
              </button>
              <span>Página {page} de {totalPages}</span>
              <button onClick={handleNextPage} disabled={page === totalPages}>
                Próxima
              </button>
            </div>
            <ContactInformation />
          </>
        </BaseContent>
      </div>
      


      <Newsletter />
      <Footer />
    </>
  )


}

export {OfferMonth}