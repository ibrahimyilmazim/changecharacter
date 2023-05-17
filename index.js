const fs = require('fs');
const path = require('path');

const klasor_yolu = 'C:/Users/username/Desktop/dosyalar'; // Dosyaların bulunduğu klasörün yolu
fs.readdir(klasor_yolu, (err, dosya_listesi) => {
    if (err) {
        console.error('Klasör okunurken bir hata oluştu:', err);
        return;
    }

    dosya_listesi.forEach((dosya) => {
        const eski_yol = path.join(klasor_yolu, dosya);
        const yeni_isim = dosya.replace(/ /g, '-'); // Dosya ismindeki boşlukları - ile değiştir
        const yeni_yol = path.join(klasor_yolu, yeni_isim);

        fs.rename(eski_yol, yeni_yol, (err) => {
            if (err) {
                console.error(`Dosya ismi değiştirilirken bir hata oluştu: ${dosya}`, err);
            } else {
                console.log(`Dosya ismi başarıyla değiştirildi: ${dosya}`);
            }
        });
    });
});
