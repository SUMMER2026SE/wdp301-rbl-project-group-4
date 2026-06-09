import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface AoDaiItem {
  id: string;
  name: string;
  material: string;
  price: string;
  status: 'AVAILABLE' | 'RESERVED';
  image: string;
}

export const AoDaiProductGrid: React.FC = () => {
  const items: AoDaiItem[] = [
    {
      id: '1',
      name: 'Cúc Họa Mi',
      material: 'Lụa cao cấp',
      price: '550,000đ',
      status: 'AVAILABLE',
      image: '/cuc_hoa_mi.png',
    },
    {
      id: '2',
      name: 'Lam Ngọc Heritage',
      material: 'Gấm & Satin',
      price: '850,000đ',
      status: 'RESERVED',
      image: '/lam_ngoc.png',
    },
    {
      id: '3',
      name: 'Nắng Thủy Tiên',
      material: 'Linen tự nhiên',
      price: '420,000đ',
      status: 'AVAILABLE',
      image: '/nang_thuy_tien.png',
    },
    {
      id: '4',
      name: 'Hồng Liên Hoa',
      material: 'Lụa vẽ tay',
      price: '1,200,000đ',
      status: 'AVAILABLE',
      image: '/hong_lien_hoa.png',
    },
  ];

  return (
    <section id="rentals" className="vh-features-section bg-stone-50/50 py-20 px-6 border-y border-stone-200">
      <div className="max-w-[1600px] w-full px-6 md:px-12 mx-auto">
        {/* Section Header */}
        <div className="vh-section-header" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', textAlign: 'left', maxWidth: '100%', marginBottom: '40px' }}>
          <div>
            <span className="vh-section-badge">Thuê Áo Dài</span>
            <h2 className="text-3xl font-bold font-header text-stone-900 mt-2">Xu Hướng Áo Dài</h2>
            <p className="text-stone-500 mt-1">Những thiết kế được yêu thích nhất trong tuần</p>
          </div>
          <button className="vh-btn vh-btn-outline vh-btn-md gap-1">
            <span>XEM TẤT CẢ</span>
            <ArrowUpRight size={16} />
          </button>
        </div>

        {/* Product Grid */}
        <div className="vh-rentals-grid">
          {items.map((item) => (
            <div key={item.id} className="vh-premium-card" style={{ padding: '20px' }}>
              {/* Image Area */}
              <div className="vh-card-image-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="vh-card-image"
                />
                {/* Status Tag Overlay */}
                <span className={`vh-status-badge ${
                  item.status === 'AVAILABLE' ? 'vh-status-available' : 'vh-status-reserved'
                }`}>
                  {item.status === 'AVAILABLE' ? 'CÓ SẴN' : 'ĐÃ ĐẶT'}
                </span>
              </div>

              {/* Text Area */}
              <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <div>
                  <h4 style={{ fontSize: '18px', fontWeight: 700, margin: 0 }}>
                    {item.name}
                  </h4>
                  <span style={{ fontSize: '12px', color: 'var(--color-text-secondary)', display: 'block', marginTop: '4px' }}>
                    {item.material}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', paddingTop: '16px', borderTop: '1px solid var(--color-light-border)' }}>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '10px', color: 'var(--color-text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>Giá thuê</span>
                    <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--color-text-primary)' }}>{item.price}</span>
                  </div>
                  <button className="vh-btn vh-btn-primary vh-btn-sm" style={{ padding: '8px 16px', borderRadius: '8px' }}>
                    Đặt ngay
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
