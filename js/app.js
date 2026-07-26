// Cart lưu trong localStorage
const CART_KEY = 'sc_cart_v1';
function getCart(){ try{ return JSON.parse(localStorage.getItem(CART_KEY))||[] }catch(e){return []} }
function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); updateCartBadge(); }
function addToCart(id){
  const cart = getCart();
  const it = cart.find(x=>x.id===id);
  if(it) it.qty++;
  else cart.push({id, qty:1});
  saveCart(cart);
  toast('Đã thêm vào giỏ hàng');
}
function removeFromCart(id){ saveCart(getCart().filter(x=>x.id!==id)); renderCart&&renderCart(); }
function updateQty(id, delta){
  const cart = getCart();
  const it = cart.find(x=>x.id===id);
  if(!it) return;
  it.qty = Math.max(1, it.qty+delta);
  saveCart(cart);
  renderCart&&renderCart();
}
function cartTotal(){
  return getCart().reduce((s,it)=>{
    const p = PRODUCTS.find(x=>x.id===it.id);
    return s + (p ? p.price*it.qty : 0);
  },0);
}
function cartCount(){ return getCart().reduce((s,it)=>s+it.qty,0); }
function updateCartBadge(){
  document.querySelectorAll('.cart-count').forEach(e=>e.textContent = cartCount());
}

// Toast
function toast(msg){
  let el = document.querySelector('.toast');
  if(!el){ el = document.createElement('div'); el.className='toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(()=>el.classList.remove('show'), 1800);
}

// Menu mobile
function initMenu(){
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if(btn) btn.onclick = ()=>nav.classList.toggle('open');
}

// Product card
function productCard(p){
  return `<div class="card">
    <div class="thumb"><img src="${imgFor(p)}" alt="${p.name}" loading="lazy"></div>
    <div class="body">
      <div class="name">${p.name}</div>
      <div class="price">${fmtVND(p.price)}</div>
      <button class="btn btn-primary btn-block" onclick="addToCart(${p.id})">Thêm vào giỏ</button>
    </div>
  </div>`;
}

document.addEventListener('DOMContentLoaded', ()=>{ initMenu(); updateCartBadge(); });
