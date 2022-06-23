module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      'questions',
      [
        {
          question: 'Informasi pelayanan pada unit layanan lapas banyuwangi tersedia melalui media elektronik maupun non elektronik',
        }, {
          question: 'Persyaratan pelayanan yang diinformasikan sesuai dengan persyaratan yang ditetapkan unit layanan lapas banyuwangi',
        }, {
          question: 'Prosedur/Alur pelayanan yang ditetapkan unit layanan ini mudah diikuti/dilakukan',
        }, {
          question: 'Jangka waktu penyelesaian pelayanan yang diterima Bapak/Ibu sesuai dengan yang ditetapkan unit layanan lapas banyuwangi',
        }, {
          question: 'Sarana prasarana pendukung pelayanan/sistem pelayanan online yang disediakan unit layanan lapas banyuwangi memberikan kenyamanan/mudah digunakan',
        }, {
          question: 'Petugas pelayanan/sistem pelayanan online pada unit layanan lapas banyuwangi merespon keperluan Bapak/Ibu dengan cepat',
        }, {
          question: 'Layanan konsultasi dan pengaduan yang disediakan unit layanan lapas banyuwangi mudah digunakan/diakses',
        }, {
          question: 'Tidak ada diskriminasi pelayanan pada unit layanan lapas banyuwangi',
        }, {
          question: 'Tidak ada pelayanan diluar prosedur/kecurangan pelayanan pada unit layanan lapas banyuwangi',
        }, {
          question: 'Tidak ada penerimaan imbalan uang/barang/fasilitas diluar ketentuan yang berlaku pada unit layanan lapas banyuwangi',
        }, {
          question: 'Tidak ada pungutan liar (pungli) pada unit layanan lapas banyuwangi',
        }, {
          question: 'Tidak ada percaloan/perantara tidak resmi pada unit layanan lapas banyuwangi',
        }, {
          question: 'Sebelum menjawab survei ini, apakah ada pegawai/pejabat pada unit layanan ini yang mengarahkan Bapak/Ibu untuk memberikan jawaban yang bagus-bagus/baik-baik saja? (Ya/Tidak)',
        }, 
      ],
      {},
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('questions', null, {});
  },
};
