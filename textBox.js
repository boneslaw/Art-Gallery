const form = document.querySelector('form');
    const FORM_DATA = 'FORM-DATA';

    window.addEventListener('DOMContentLoaded', () => {
        const fromStorage = localStorage.getItem(FORM_DATA);
        if (!fromStorage) return;

        const json = JSON.parse(fromStorage);

        for (const textarea of form.querySelectorAll('textarea')) {
            textarea.value = json[textarea.name];
        }
    });

    form.addEventListener('keyup', () => {
        const formData = Object.fromEntries([...new FormData(form)]);
        localStorage.setItem(FORM_DATA, JSON.stringify(formData));
    });