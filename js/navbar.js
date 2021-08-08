addEventListener('DOMContentLoaded', () => {

    // Responsive Navbar Menu
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const menu_links = document.querySelector('.menu_links')
            menu_links.classList.toggle('show')
        })
    }
    
})