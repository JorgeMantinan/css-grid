addEventListener('DOMContentLoaded', () => {

    // Responsive Navbar Menu
    const menu_links = document.querySelector('.menu_links')
    const btn_menu = document.querySelector('.btn_menu')
    if (btn_menu && menu_links) {
        btn_menu.addEventListener('click', () => {
            menu_links.classList.toggle('show')
        })

        // Close the menu when a section link is clicked
        menu_links.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menu_links.classList.remove('show')
            })
        })
    }

})