document.addEventListener('DOMContentLoaded', function () {

    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // 大会情報のタイルクリックイベント
    const tournamentTiles = document.querySelectorAll('.tournament-tile');
    const tournamentDetails = document.getElementById('tournament-details');
    const detailsContent = document.getElementById('details-content');
    const closeDetailsButton = document.getElementById('close-details');

    const tournamentInfo = [
        `
        <h3>第一回 KTECポケポケMC</h3>
        <p>日程</p>
        <table><tr><td>アッパーブラケット(UB)</td><td>12/19 16:30</td></tr><tr><td>ロウワーブラケット(LB)</td><td>12/19 16:30</td></tr><tr><td>グランドファイナル(GF)</td><td>12/20 16:30</td></tr></table>
        <p>エントリーフォーム: <a href="https://forms.gle/AZq2ioSZoT34LNx38" target="_blank">ここをクリック</a></p>
        <p>エントリー可能期間: 12/19 ~13:00迄<p>
        <p>トーナメント表:<br><a href="https://the-tournament.net/tournaments/Iw5tRyLUHx79KXWhfIX5/share" target="_blank">アッパーブラケット</a><br><a href="https://the-tournament.net/tournaments/pGv72GEe1vKISGkfy18d/share" target="_blank">ロウワーブラケット</a></p>
        <p>結果: 後日公開</p>
        <p>大会キャンセルは<a href="https://forms.gle/rN4eMGx5sH821J3Z9" target="_blank">こちら</a></p>    
        `,
    ]
    
    tournamentTiles.forEach(tile => {
        tile.addEventListener('click', function () {
            const tournamentId = this.getAttribute('data-tournament');
            // 大会の詳細情報を取得して表示
            if (tournamentId === 'tournament1') {
                detailsContent.innerHTML = tournamentInfo[0];
            } else if (tournamentId === 'tournament2') {
                detailsContent.innerHTML = tournamentInfo[1];
            } else if (tournamentId === 'tournament3') {
                detailsContent.innerHTML = tournamentInfo[2];
            }
            tournamentDetails.classList.remove('hidden');
        });
    });

    // 詳細を閉じるボタン
    closeDetailsButton.addEventListener('click', function () {
        tournamentDetails.classList.add('hidden');
    });
});
