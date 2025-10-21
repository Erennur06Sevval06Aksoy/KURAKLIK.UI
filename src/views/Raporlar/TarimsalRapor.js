import React from "react";
import { Card, Row, Col, Container, Table, Badge, Button, Form, InputGroup } from "react-bootstrap";

function TarimsalRapor() {
  return (
      <>
        <style>{`
        /* Component-scoped styles: Applied LIGHT theme from KuraklikRaporu */
        
        /* 1. KART VE GENEL STİLLER */
        .kb-card {
          background: #ffffff;
          color: #212529;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden; 
        }

        .kb-header {
          padding: 24px;
          background: linear-gradient(90deg, #42a5f5, #1e88e5); 
          border-bottom: 0;
          color: #ffffff;
        }

        .kb-title {
          margin: 0;
          font-weight: 700;
          letter-spacing: 0;
          color: #ffffff;
        }

        .kb-subtitle {
          margin: 0;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.95rem;
        }

        .kb-filters {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 12px;
          border: 1px solid #e9ecef;
          box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.05);
        }

        /* 2. FİLTRE ALANLARI STİLLERİ */
        .kb-inputgroup .input-group-text {
          background: #e9ecef;
          border: 1px solid #ced4da;
          border-right: 0;
          color: #6c757d;
          padding: 0.5rem 0.75rem;
          border-radius: 8px 0 0 8px !important;
        }
        
        .kb-inputgroup .form-control, .kb-inputgroup .form-select {
          border: 1px solid #ced4da;
          background: #ffffff;
          color: #212529;
          box-shadow: none !important;
          transition: border-color 0.2s, box-shadow 0.2s;
          padding: 0.5rem 0.75rem;
          border-left: 0;
          border-radius: 0 8px 8px 0 !important;
        }

        .kb-inputgroup .form-control:focus, .kb-inputgroup .form-select:focus {
          border-color: #42a5f5;
          background: #ffffff;
          box-shadow: 0 0 0 0.25rem rgba(66, 165, 245, 0.25) !important;
        }
        
        /* Önceki çoklu seçim stilini kaldırdık */
        
        .form-text {
          color: #6c757d !important;
          font-size: 0.8rem;
        }

        .form-label {
          font-weight: 600;
          color: #495057;
          margin-bottom: 0.4rem !important;
        }

        .kb-actions .btn {
          min-width: 140px;
          font-weight: 600;
          border-radius: 20px; 
        }
        
        /* 3. TABLO VE BADGE STİLLERİ */
        .kb-table thead th {
          border-bottom: 2px solid #e9ecef;
          font-weight: 600;
          color: #6c757d;
          text-transform: uppercase;
        }

        .kb-table tbody tr {
          border-top: 1px solid #f8f9fa;
        }

        .kb-table tbody tr:hover {
          background: #f1f1f1 !important;
        }

        .kb-table tbody tr:nth-child(odd) {
          background: #fafafa;
        }
        
        /* Renk Paleti */
        .kb-badge-success { background-color: #4caf50 !important; }
        .kb-badge-warning { background-color: #ff9800 !important; }
        .kb-badge-info { background-color: #00bcd4 !important; }
        .kb-badge-danger { background-color: #ef5350 !important; }


        /* Responsive tweaks */
        @media (max-width: 575px) {
          .kb-actions { flex-direction: column-reverse; gap: 8px; }
          .kb-actions .btn { width: 100%; }
        }
      `}</style>

        {/* py-5 ve arka plan rengi eklendi */}
        <Container fluid className="py-5" style={{ minHeight: '100vh', background: '#f4f7fa' }}>
          <Row>
            <Col md="12">
              <Card className="kb-card">
                <Card.Header className="kb-header d-flex flex-column flex-sm-row justify-content-between align-items-sm-center">
                  <div>
                    <h4 className="kb-title mb-1">🌾 Tarımsal Rapor</h4>
                    <p className="kb-subtitle mb-0">Ürün, bölge ve döneme göre verileri filtreleyin ve inceleyin.</p>
                  </div>
                  <div className="text-end mt-3 mt-sm-0">
                    <Button size="sm" variant="light" className="me-2 rounded-pill shadow-sm text-primary">
                      <i className="fas fa-chart-line me-1"></i> Trendler
                    </Button>
                    <Button size="sm" variant="primary" className="rounded-pill shadow-sm">
                      <i className="fas fa-file-export me-1"></i> Dışa Aktar
                    </Button>
                  </div>
                </Card.Header>

                <Card.Body>
                  {/* Filtreler */}
                  <div className="kb-filters mb-4">
                    <Form>
                      <Row className="g-4 align-items-end">

                        {/* Ürün Filtresi (TEKİL SEÇİM - DROP DOWN) */}
                        <Col lg="3" md="6">
                          <Form.Label>Ürün</Form.Label>
                          <InputGroup className="kb-inputgroup shadow-sm">
                            <InputGroup.Text><i className="fas fa-seedling"></i></InputGroup.Text>
                            {/* 'multiple' özelliği kaldırıldı */}
                            <Form.Select defaultValue="Tümü" aria-label="Ürün seçimi">
                              <option value="Tümü">Tüm Ürünler</option>
                              {/* optgroup'lar düz seçeneklere dönüştürüldü, çünkü tekli seçimde optgroup'lar sadece görseldir */}
                              <option>Buğday</option>
                              <option>Arpa</option>
                              <option>Mısır</option>
                              <option>Domates</option>
                              <option>Patates</option>
                              <option>Ayçiçeği</option>
                              <option>Şeker Pancarı</option>
                            </Form.Select>
                          </InputGroup>
                          <Form.Text>Görüntülenecek ürünü seçin.</Form.Text>
                        </Col>

                        {/* Bölge Filtresi (Tekil Seçim - Dropdown) */}
                        <Col lg="3" md="6">
                          <Form.Label>Bölge</Form.Label>
                          <InputGroup className="kb-inputgroup shadow-sm">
                            <InputGroup.Text><i className="fas fa-map-marker-alt"></i></InputGroup.Text>
                            <Form.Select defaultValue="Tümü" aria-label="Bölge seçimi">
                              <option value="Tümü">Tüm Bölgeler</option>
                              <option>Marmara</option>
                              <option>Ege</option>
                              <option>Akdeniz</option>
                              <option>İç Anadolu</option>
                              <option>Karadeniz</option>
                              <option>Doğu Anadolu</option>
                              <option>Güneydoğu Anadolu</option>
                            </Form.Select>
                          </InputGroup>
                          <Form.Text>Görüntülenecek bölgeyi seçin.</Form.Text>
                        </Col>

                        {/* Dönem (Ay) */}
                        <Col lg="3" md="6">
                          <Form.Label>Dönem (Ay)</Form.Label>
                          <InputGroup className="kb-inputgroup shadow-sm">
                            <InputGroup.Text><i className="far fa-calendar-alt"></i></InputGroup.Text>
                            <Form.Control type="month" defaultValue="2025-08" />
                          </InputGroup>
                          <Form.Text>Raporu belirli bir aya daraltın.</Form.Text>
                        </Col>

                        {/* Aksiyonlar */}
                        <Col lg="3" md="6" className="d-flex justify-content-end kb-actions">
                          <div className="d-flex gap-2 w-100 justify-content-end">
                            <Button size="sm" variant="primary" className="rounded-pill shadow-sm flex-grow-1 flex-md-grow-0">
                              <i className="fas fa-filter me-1"></i> Uygula
                            </Button>
                            <Button size="sm" variant="outline-secondary" className="rounded-pill shadow-sm flex-grow-1 flex-md-grow-0">
                              <i className="fas fa-undo me-1"></i> Temizle
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </Form>
                  </div>

                  {/* Ek Dışa Aktarma Aksiyonları */}
                  <div className="mb-3 d-flex justify-content-end align-items-center gap-2">
                    <Button size="sm" variant="outline-success" className="rounded-pill shadow-sm">
                      <i className="fas fa-file-csv me-1"></i> CSV
                    </Button>
                    <Button size="sm" variant="outline-danger" className="rounded-pill shadow-sm">
                      <i className="fas fa-file-pdf me-1"></i> PDF
                    </Button>
                    <Button size="sm" variant="outline-info" className="rounded-pill shadow-sm">
                      <i className="fas fa-file-excel me-1"></i> Excel
                    </Button>
                  </div>

                  {/* Rapor Tablosu */}
                  <div className="table-responsive">
                    <Table className="kb-table align-middle" hover>
                      <thead className="text-muted small">
                      <tr>
                        <th>Ürün</th>
                        <th>Bölge</th>
                        <th>Üretim (Ton)</th>
                        <th>Verimlilik</th>
                        <th>Fiyat (₺/kg)</th>
                        <th>Toplam Gelir</th>
                        <th>Durum</th>
                      </tr>
                      </thead>
                      <tbody>
                      {/* Tablo satırları */}
                      {Array(5).fill(null).map((_, index) => (
                          <tr key={index}>
                            <td>{index % 5 === 0 ? 'Buğday' : index % 5 === 1 ? 'Arpa' : index % 5 === 2 ? 'Mısır' : index % 5 === 3 ? 'Domates' : 'Patates'}</td>
                            <td>{index % 5 === 0 ? 'Marmara' : index % 5 === 1 ? 'Ege' : index % 5 === 2 ? 'Akdeniz' : index % 5 === 3 ? 'İç Anadolu' : 'Karadeniz'}</td>
                            <td>{(Math.random() * 1000000).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
                            <td>
                              <Badge
                                  className={index % 5 < 3 ? 'kb-badge-success' : index % 5 === 3 ? 'kb-badge-info' : 'kb-badge-warning'}
                                  text="white"
                                  px={2}
                                  py={1}
                                  rounded="pill"
                              >
                                %{Math.floor(Math.random() * 30 + 65)}
                              </Badge>
                            </td>
                            <td>₺{(Math.random() * 10 + 4).toFixed(2)}</td>
                            <td>₺{(Math.random() * 8 + 1).toFixed(1)}M</td>
                            <td>{index % 5 < 3 ? 'Yüksek' : index % 5 === 3 ? 'Stabil' : 'Düşük'}</td>
                          </tr>
                      ))}
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
  );
}

export default TarimsalRapor;
