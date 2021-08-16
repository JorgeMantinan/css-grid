addEventListener('DOMContentLoaded', () => {

    // Responsive Navbar Menu
    const btn_menu = document.querySelector('.course')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            const list_courses = document.querySelector('.list_courses')
            menu_links.classList.toggle('display_courses')
        })
    }
    
})